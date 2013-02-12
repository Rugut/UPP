
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class Встречи:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public DateTime ДатаНачала;//Дата начала
		public DateTime ДатаОкончания;//Дата окончания
		public V82.СправочникиСсылка.Помещения Помещение;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public string/*(0)*/ Комментарий;
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
		public bool ВстречаСКандидатом;//Это - встреча с кандидатом
		public V82.СправочникиСсылка.ЗаявкиКандидатов ЗаявкаКандидата;//Кандидат
	}
}