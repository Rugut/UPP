
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ПроизвольныйЭД:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Контрагенты Контрагент;
		public V82.Перечисления/*Ссылка*/.НаправленияЭД Направление;
		public V82.СправочникиСсылка.Организации Организация;
		public bool Прочитан;
		public V82.Перечисления/*Ссылка*/.СтатусыЭД СтатусДокумента;//Статус документа
		public string/*(0)*/ Текст;
	}
}
