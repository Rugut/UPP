
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
	[ProtoContract]
	[DataContract]
	public partial class ЗаявлениеВФССОВозмещенииРасходовНаПогребение:ДокументОбъект
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
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		[DataMember]
		[ProtoMember(13)]
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		[DataMember]
		[ProtoMember(14)]
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		[DataMember]
		[ProtoMember(15)]
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		[DataMember]
		[ProtoMember(16)]
		public string/*(240)*/ АдресОрганизации {get;set;}//Адрес организации
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(2)*/ КоличествоСтраниц {get;set;}//Количество страниц
		[DataMember]
		[ProtoMember(21)]
		public string/*(30)*/ ТелефонСоставителя {get;set;}//Телефон составителя
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Банки Банк {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public string/*(100)*/ НаименованиеБанка {get;set;}//Наименование банка
		[DataMember]
		[ProtoMember(24)]
		public string/*(20)*/ НомерЛицевогоСчета {get;set;}//Номер лицевого счета
		[DataMember]
		[ProtoMember(25)]
		public string/*(20)*/ НомерСчета {get;set;}//Номер счета
		[DataMember]
		[ProtoMember(26)]
		public string/*(9)*/ БИКБанка {get;set;}//БИК банка
		///<summary>
		///Корреспонденский счет банка
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public string/*(20)*/ КоррСчетБанка {get;set;}//Корр. счет банка
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
						Insert Into _Document384(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7679RRef
						,_Fld7680RRef
						,_Fld7681
						,_Fld7682
						,_Fld7683
						,_Fld7684
						,_Fld7685
						,_Fld7686
						,_Fld7687RRef
						,_Fld7688RRef
						,_Fld7689
						,_Fld7690
						,_Fld7691
						,_Fld7692RRef
						,_Fld7693
						,_Fld7694
						,_Fld7695
						,_Fld7696
						,_Fld7697)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Ответственный
						,@Комментарий
						,@НаименованиеТерриториальногоОрганаФСС
						,@РегистрационныйНомерФСС
						,@ДополнительныйКодФСС
						,@КодПодчиненностиФСС
						,@АдресОрганизации
						,@Руководитель
						,@ДолжностьРуководителя
						,@КраткийСоставДокумента
						,@КоличествоСтраниц
						,@ТелефонСоставителя
						,@Банк
						,@НаименованиеБанка
						,@НомерЛицевогоСчета
						,@НомерСчета
						,@БИКБанка
						,@КоррСчетБанка)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document384
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7679RRef	= @Организация
						,_Fld7680RRef	= @Ответственный
						,_Fld7681	= @Комментарий
						,_Fld7682	= @НаименованиеТерриториальногоОрганаФСС
						,_Fld7683	= @РегистрационныйНомерФСС
						,_Fld7684	= @ДополнительныйКодФСС
						,_Fld7685	= @КодПодчиненностиФСС
						,_Fld7686	= @АдресОрганизации
						,_Fld7687RRef	= @Руководитель
						,_Fld7688RRef	= @ДолжностьРуководителя
						,_Fld7689	= @КраткийСоставДокумента
						,_Fld7690	= @КоличествоСтраниц
						,_Fld7691	= @ТелефонСоставителя
						,_Fld7692RRef	= @Банк
						,_Fld7693	= @НаименованиеБанка
						,_Fld7694	= @НомерЛицевогоСчета
						,_Fld7695	= @НомерСчета
						,_Fld7696	= @БИКБанка
						,_Fld7697	= @КоррСчетБанка
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НаименованиеТерриториальногоОрганаФСС", НаименованиеТерриториальногоОрганаФСС);
					Команда.Parameters.AddWithValue("РегистрационныйНомерФСС", РегистрационныйНомерФСС);
					Команда.Parameters.AddWithValue("ДополнительныйКодФСС", ДополнительныйКодФСС);
					Команда.Parameters.AddWithValue("КодПодчиненностиФСС", КодПодчиненностиФСС);
					Команда.Parameters.AddWithValue("АдресОрганизации", АдресОрганизации);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("КоличествоСтраниц", КоличествоСтраниц);
					Команда.Parameters.AddWithValue("ТелефонСоставителя", ТелефонСоставителя);
					Команда.Parameters.AddWithValue("НаименованиеБанка", НаименованиеБанка);
					Команда.Parameters.AddWithValue("НомерЛицевогоСчета", НомерЛицевогоСчета);
					Команда.Parameters.AddWithValue("НомерСчета", НомерСчета);
					Команда.Parameters.AddWithValue("БИКБанка", БИКБанка);
					Команда.Parameters.AddWithValue("КоррСчетБанка", КоррСчетБанка);
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
					Команда.CommandText = @"Delete _Document384
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}