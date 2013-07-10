
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///Инвентаризация ОС
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИнвентаризацияОС:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///Организация
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаНачалаИнвентаризации {get;set;}//Дата начала инвентаризации
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОкончанияИнвентаризации {get;set;}//Дата окончания инвентаризации
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ ПричинаПроведенияИнвентаризации {get;set;}//Причина проведения инвентаризации
		///<summary>
		///Документ-основание для проведения инвентаризации
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(50)*/ ДокументОснованиеВид {get;set;}//Документ-основание
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДокументОснованиеДата {get;set;}//Дата документа-основания
		[DataMember]
		[ProtoMember(18)]
		public string/*(10)*/ ДокументОснованиеНомер {get;set;}//Номер документа-основания
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document19659(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld20127RRef
						,_Fld20128RRef
						,_Fld20129RRef
						,_Fld20130
						,_Fld20131
						,_Fld20132
						,_Fld20133
						,_Fld20134
						,_Fld20135
						,_Fld20136)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ПодразделениеОрганизации
						,@Ответственный
						,@Комментарий
						,@ДатаНачалаИнвентаризации
						,@ДатаОкончанияИнвентаризации
						,@ПричинаПроведенияИнвентаризации
						,@ДокументОснованиеВид
						,@ДокументОснованиеДата
						,@ДокументОснованиеНомер)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document19659
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld20127RRef	= @Организация
						,_Fld20128RRef	= @ПодразделениеОрганизации
						,_Fld20129RRef	= @Ответственный
						,_Fld20130	= @Комментарий
						,_Fld20131	= @ДатаНачалаИнвентаризации
						,_Fld20132	= @ДатаОкончанияИнвентаризации
						,_Fld20133	= @ПричинаПроведенияИнвентаризации
						,_Fld20134	= @ДокументОснованиеВид
						,_Fld20135	= @ДокументОснованиеДата
						,_Fld20136	= @ДокументОснованиеНомер
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ДатаНачалаИнвентаризации", ДатаНачалаИнвентаризации);
					Команда.Parameters.AddWithValue("ДатаОкончанияИнвентаризации", ДатаОкончанияИнвентаризации);
					Команда.Parameters.AddWithValue("ПричинаПроведенияИнвентаризации", ПричинаПроведенияИнвентаризации);
					Команда.Parameters.AddWithValue("ДокументОснованиеВид", ДокументОснованиеВид);
					Команда.Parameters.AddWithValue("ДокументОснованиеДата", ДокументОснованиеДата);
					Команда.Parameters.AddWithValue("ДокументОснованиеНомер", ДокументОснованиеНомер);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document19659
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}