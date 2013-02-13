
using System;
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ВыгрузкаРегламентированныхОтчетов:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public DateTime ПериодПо;//Период По
		public V82.СправочникиСсылка.Организации Организация;
		public string/*(4)*/ КодИМНС;//Код ИФНС
		public string/*(0)*/ Комментарий;
		public bool флОтборИФНС;//Фл отбор ИФНС
	}
}