import json,glob,os,re,sys,itertools
base=os.path.dirname(os.path.abspath(__file__))+'/ms/chapters/'
def cycles_through(nodes,edges):
    adj={}
    for e in edges:
        if e.get('is_confounding'): continue
        adj.setdefault(e['from'],[]).append(e)
    res=[]
    start=nodes[0]
    def dfs(cur,count,used,negs):
        if count==len(nodes):
            for e in adj.get(cur,[]):
                if e['to']==start: res.append(negs+(e['polarity']=='negative'))
            return
        for e in adj.get(cur,[]):
            if e['to'] in nodes and e['to'] not in used:
                dfs(e['to'],count+1,used|{e['to']},negs+(e['polarity']=='negative'))
    dfs(start,1,{start},0)
    return res
def check(path):
    g=json.load(open(path)); out=[]
    ids={n['id'] for n in g['nodes']}
    for e in g['edges']:
        if e['from'] not in ids or e['to'] not in ids: out.append('edge refs missing node')
    # opposite arrow pairs not in a loop of 2
    pairs={(e['from'],e['to']) for e in g['edges'] if not e.get('is_confounding')}
    for l in g.get('loops',[]):
        c=cycles_through(l['nodes'],g['edges'])
        if not c: out.append(f"loop '{l['label']}' is not a closed path")
        else:
            t='reinforcing' if c[0]%2==0 else 'balancing'
            if t!=l['type'] or l.get('minus_count')!=c[0]: out.append(f"loop '{l['label']}' declared {l['type']} m={l.get('minus_count')} but closed path has {c[0]} negatives ({t})")
    # unnamed cycles: any directed cycle not listed? skip
    for n in g['nodes']:
        if len(n['label'].split())>4 or len(n['label'])>26: out.append(f"long label '{n['label']}'")
    return g,out
if __name__=='__main__':
    for p in sorted(glob.glob(base+'*/diagrams/graph/*.json')+glob.glob(base+'*/*/diagrams/graph/*.json')):
        g,out=check(p)
        if out: print(p.replace(base,''),'\n   '+'\n   '.join(out))
