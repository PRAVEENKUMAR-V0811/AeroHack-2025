import kociemba

def solve_cube(state_string):
    try:
        solution = kociemba.solve(state_string)
        return solution
    except Exception as e:
        return str(e)