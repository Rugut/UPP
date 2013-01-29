
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(–егл)
		///</summary>
	public enum —пособыќценки
	{
		ѕуста€—сылка = - 1,
		ѕо—редней = 0,//ѕо средней
	///<summary>
	///First input, first output (первым пришел, первым обработан)
	///</summary>
		‘»‘ќ = 1,
	///<summary>
	///Last input, first output (последним пришел, первым обработан)
	///</summary>
		Ћ»‘ќ = 2,
	}
	public static partial class —пособыќценки_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ѕо—редней = new Guid("d9620884-3a94-13d3-47ee-822491b64739");//ѕо средней
		///<summary>
		///First input, first output (первым пришел, первым обработан)
		///</summary>
		public static readonly Guid ‘»‘ќ = new Guid("65c6a5af-8de2-6b2a-462e-70888faf6ff7");
		///<summary>
		///Last input, first output (последним пришел, первым обработан)
		///</summary>
		public static readonly Guid Ћ»‘ќ = new Guid("595d1695-3c6f-74e7-46f4-5909f411d078");
		public static —пособыќценки ѕолучить(this —пособыќценки «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static —пособыќценки ѕолучить(this —пособыќценки «начение, Guid —сылка)
		{
			if(—сылка == ѕо—редней)
			{
				return —пособыќценки.ѕо—редней;
			}
			else if(—сылка == ‘»‘ќ)
			{
				return —пособыќценки.‘»‘ќ;
			}
			else if(—сылка == Ћ»‘ќ)
			{
				return —пособыќценки.Ћ»‘ќ;
			}
			return —пособыќценки.ѕуста€—сылка;
		}
		public static byte[]  люч(this —пособыќценки «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this —пособыќценки «начение)
		{
			switch («начение)
			{
				case —пособыќценки.ѕо—редней: return ѕо—редней;
				case —пособыќценки.‘»‘ќ: return ‘»‘ќ;
				case —пособыќценки.Ћ»‘ќ: return Ћ»‘ќ;
			}
			return Guid.Empty;
		}
	}
}
