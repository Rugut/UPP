
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬идыЅюджетов
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///Ѕюджет доходов и расходов
	///</summary>
		Ѕƒ– = 0,//Ѕюджет доходов и расходов
		Ѕƒƒ— = 1,//Ѕюджет движени€ денежных средств
		ѕрочие = 2,//ѕрочие оборотные бюджеты
	}
	public static partial class ¬идыЅюджетов_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///Ѕюджет доходов и расходов
		///</summary>
		public static readonly Guid Ѕƒ– = new Guid("ec4caf8c-4b04-6b48-4f0b-d0224b525b58");//Ѕюджет доходов и расходов
		public static readonly Guid Ѕƒƒ— = new Guid("99981abf-2780-33b5-4230-fbd7a0bf2e21");//Ѕюджет движени€ денежных средств
		public static readonly Guid ѕрочие = new Guid("a9301398-3214-22fe-4719-c5fc601c1b8b");//ѕрочие оборотные бюджеты
		public static ¬идыЅюджетов ѕолучить(this ¬идыЅюджетов «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыЅюджетов ѕолучить(this ¬идыЅюджетов «начение, Guid —сылка)
		{
			if(—сылка == Ѕƒ–)
			{
				return ¬идыЅюджетов.Ѕƒ–;
			}
			else if(—сылка == Ѕƒƒ—)
			{
				return ¬идыЅюджетов.Ѕƒƒ—;
			}
			else if(—сылка == ѕрочие)
			{
				return ¬идыЅюджетов.ѕрочие;
			}
			return ¬идыЅюджетов.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыЅюджетов «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыЅюджетов «начение)
		{
			switch («начение)
			{
				case ¬идыЅюджетов.Ѕƒ–: return Ѕƒ–;
				case ¬идыЅюджетов.Ѕƒƒ—: return Ѕƒƒ—;
				case ¬идыЅюджетов.ѕрочие: return ѕрочие;
			}
			return Guid.Empty;
		}
	}
}
