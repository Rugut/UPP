
using System;
using V82;
using V82.—правочники—сылка;
using V82.ƒокументы—сылка;
using V82.ѕеречислени€;//—сылка;
namespace V82.ƒокументы—сылка
{
	public partial class  орректировка—тоимости—писани€“оваров:ƒокумент—сылка
	{
		public Guid —сылка;
		public ulong ¬ерси€;
		public bool ѕометка”далени€;
		public DateTime ƒата;
		public DateTime ѕрефиксЌомера;
		public string Ќомер;
		public bool ѕроведен;
		///<summary>
		///(ќбщ) Ћюба€ дополнительна€ информаци€
		///</summary>
		public string/*(0)*/  омментарий;
		///<summary>
		///(ќбщ)
		///</summary>
		public V82.—правочники—сылка.ќрганизации ќрганизаци€;
		///<summary>
		///(ќбщ)
		///</summary>
		public V82.—правочники—сылка.ѕользователи ќтветственный;
		///<summary>
		///(–егл)
		///</summary>
		public bool ќтражать¬Ѕухгалтерском”чете;//ќтражать в бухгалтерском учете
		///<summary>
		///(ќбщ)
		///</summary>
		public bool ќтражать¬ћеждународном”чете;//ќтражать в международном учете
		///<summary>
		///(–егл)
		///</summary>
		public bool ќтражать¬Ќалоговом”чете;//ќтражать в налоговом учете
		///<summary>
		///(ќбщ)
		///</summary>
		public bool ќтражать¬”правленческом”чете;//ќтражать в управленческом учете
		public DateTime ѕериод–егистрации;//ѕериод регистрации
	}
}
