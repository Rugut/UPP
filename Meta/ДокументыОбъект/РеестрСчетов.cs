
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
	public partial class РеестрСчетов:ДокументОбъект
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
		public V82.СправочникиСсылка.Банки ИсполняющийБанк {get;set;}//Исполняющий банк
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Расчетный счет организации
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Расчетный счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///Расчетный счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Расчетный счет контрагента
		[DataMember]
		[ProtoMember(14)]
		public string/*(10)*/ НомерАккредитива {get;set;}//Номер аккредитива
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаАккредитива {get;set;}//Дата аккредитива
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ СуммаАккредитива {get;set;}//Сумма аккредитива
		///<summary>
		///Дата закрытия аккредитива
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public V82.ДокументыСсылка.АккредитивПереданный ДокументОснование {get;set;}//Документ основание
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
						Insert Into _Document444(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11300RRef
						,_Fld11301RRef
						,_Fld11302RRef
						,_Fld11303RRef
						,_Fld11304RRef
						,_Fld11305
						,_Fld11306
						,_Fld11307
						,_Fld11308
						,_Fld11309
						,_Fld11310RRef
						,_Fld11311RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ИсполняющийБанк
						,@Организация
						,@СчетОрганизации
						,@Контрагент
						,@СчетКонтрагента
						,@НомерАккредитива
						,@ДатаАккредитива
						,@СуммаАккредитива
						,@ДатаЗакрытия
						,@Комментарий
						,@Ответственный
						,@ДокументОснование)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document444
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11300RRef	= @ИсполняющийБанк
						,_Fld11301RRef	= @Организация
						,_Fld11302RRef	= @СчетОрганизации
						,_Fld11303RRef	= @Контрагент
						,_Fld11304RRef	= @СчетКонтрагента
						,_Fld11305	= @НомерАккредитива
						,_Fld11306	= @ДатаАккредитива
						,_Fld11307	= @СуммаАккредитива
						,_Fld11308	= @ДатаЗакрытия
						,_Fld11309	= @Комментарий
						,_Fld11310RRef	= @Ответственный
						,_Fld11311RRef	= @ДокументОснование
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("НомерАккредитива", НомерАккредитива);
					Команда.Parameters.AddWithValue("ДатаАккредитива", ДатаАккредитива);
					Команда.Parameters.AddWithValue("СуммаАккредитива", СуммаАккредитива);
					Команда.Parameters.AddWithValue("ДатаЗакрытия", ДатаЗакрытия);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ДокументОснование", ДокументОснование.Ссылка);
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
					Команда.CommandText = @"Delete _Document444
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}