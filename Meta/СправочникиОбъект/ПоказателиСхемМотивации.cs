
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ПоказателиСхемМотивации:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.Перечисления/*Ссылка*/.ТипыПоказателейСхемМотивации ТипПоказателя {get;set;}//Тип показателя
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ИзменениеПоказателейСхемМотивации ВозможностьИзменения {get;set;}//Возможность изменения
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыПоказателейСхемМотивации ВидПоказателя {get;set;}//Вид показателя
		[DataMember]
		[ProtoMember(10)]
		public bool ПоказательЭффективности {get;set;}//Показатель эффективности
		[DataMember]
		[ProtoMember(11)]
		public string/*(100)*/ Идентификатор {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool ТарифнаяСтавка {get;set;}//Тарифная ставка
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ПоказателиСхемМотивации ФактическийПоказатель {get;set;}//Фактический показатель
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаСуммыПоказателей СпособРасчетаСуммы {get;set;}//Способ расчета суммы
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ПоказателиСхемМотивации СуммируемыйПоказатель {get;set;}//Суммируемый показатель 
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ВидыСтажа ВидСтажа {get;set;}//Вид стажа
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference121(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld21278RRef
						,_Fld1625RRef
						,_Fld1624RRef
						,_Fld21279
						,_Fld21280
						,_Fld21281
						,_Fld22978RRef
						,_Fld26581RRef
						,_Fld26582RRef
						,_Fld26583RRef
						,_Fld26584RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@ТипПоказателя
						,@ВозможностьИзменения
						,@ВидПоказателя
						,@ПоказательЭффективности
						,@Идентификатор
						,@ТарифнаяСтавка
						,@ФактическийПоказатель
						,@СпособРасчетаСуммы
						,@СуммируемыйПоказатель
						,@Валюта
						,@ВидСтажа)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference121
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld21278RRef	= @ТипПоказателя
						,_Fld1625RRef	= @ВозможностьИзменения
						,_Fld1624RRef	= @ВидПоказателя
						,_Fld21279	= @ПоказательЭффективности
						,_Fld21280	= @Идентификатор
						,_Fld21281	= @ТарифнаяСтавка
						,_Fld22978RRef	= @ФактическийПоказатель
						,_Fld26581RRef	= @СпособРасчетаСуммы
						,_Fld26582RRef	= @СуммируемыйПоказатель
						,_Fld26583RRef	= @Валюта
						,_Fld26584RRef	= @ВидСтажа
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ТипПоказателя", ТипПоказателя.Ключ());
					Команда.Parameters.AddWithValue("ВозможностьИзменения", ВозможностьИзменения.Ключ());
					Команда.Parameters.AddWithValue("ВидПоказателя", ВидПоказателя.Ключ());
					Команда.Parameters.AddWithValue("ПоказательЭффективности", ПоказательЭффективности);
					Команда.Parameters.AddWithValue("Идентификатор", Идентификатор);
					Команда.Parameters.AddWithValue("ТарифнаяСтавка", ТарифнаяСтавка);
					Команда.Parameters.AddWithValue("ФактическийПоказатель", ФактическийПоказатель.Ссылка);
					Команда.Parameters.AddWithValue("СпособРасчетаСуммы", СпособРасчетаСуммы.Ключ());
					Команда.Parameters.AddWithValue("СуммируемыйПоказатель", СуммируемыйПоказатель.Ссылка);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("ВидСтажа", ВидСтажа.Ссылка);
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
					Команда.CommandText = @"Delete _Reference121
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}