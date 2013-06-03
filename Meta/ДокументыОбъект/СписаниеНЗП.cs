
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СписаниеНЗП:ДокументОбъект
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
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ВидыНормативнойСтоимостиПроизводства ТипСтоимости {get;set;}//Тип стоимости
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public object СчетДт {get;set;}//Счет дебета
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public object СубконтоДт1 {get;set;}//Субконто дебета 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public object СубконтоДт2 {get;set;}//Субконто дебета 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоДт3 {get;set;}//Субконто дебета 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СчетДтНУ {get;set;}//Счет дебета (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоДтНУ1 {get;set;}//Субконто дебета 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоДтНУ2 {get;set;}//Субконто дебета 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоДтНУ3 {get;set;}//Субконто дебета 3 (налоговый учет)
		[DataMember]
		[ProtoMember(26)]
		public V82.ДокументыСсылка.ИнвентаризацияНЗП ДокИнвентаризация {get;set;}//Документ инвентаризации
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
						Insert Into _Document593(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17327
						,_Fld17328
						,_Fld17329
						,_Fld17330RRef
						,_Fld17331RRef
						,_Fld17332
						,_Fld17333RRef
						,_Fld17334RRef
						,_Fld17335RRef
						,_Fld17336RRef
						,_Fld17337RRef
						,_Fld17338RRef
						,_Fld17339RRef
						,_Fld17340RRef
						,_Fld17341RRef
						,_Fld17342RRef
						,_Fld17343RRef
						,_Fld17344RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Организация
						,@Подразделение
						,@Комментарий
						,@Ответственный
						,@ТипСтоимости
						,@СчетДт
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@ПодразделениеОрганизации
						,@СчетДтНУ
						,@СубконтоДтНУ1
						,@СубконтоДтНУ2
						,@СубконтоДтНУ3
						,@ДокИнвентаризация)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document593
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17327	= @ОтражатьВУправленческомУчете
						,_Fld17328	= @ОтражатьВБухгалтерскомУчете
						,_Fld17329	= @ОтражатьВНалоговомУчете
						,_Fld17330RRef	= @Организация
						,_Fld17331RRef	= @Подразделение
						,_Fld17332	= @Комментарий
						,_Fld17333RRef	= @Ответственный
						,_Fld17334RRef	= @ТипСтоимости
						,_Fld17335RRef	= @СчетДт
						,_Fld17336RRef	= @СубконтоДт1
						,_Fld17337RRef	= @СубконтоДт2
						,_Fld17338RRef	= @СубконтоДт3
						,_Fld17339RRef	= @ПодразделениеОрганизации
						,_Fld17340RRef	= @СчетДтНУ
						,_Fld17341RRef	= @СубконтоДтНУ1
						,_Fld17342RRef	= @СубконтоДтНУ2
						,_Fld17343RRef	= @СубконтоДтНУ3
						,_Fld17344RRef	= @ДокИнвентаризация
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ТипСтоимости", ТипСтоимости.Ключ());
					Команда.Parameters.AddWithValue("СчетДт", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетДтНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДокИнвентаризация", ДокИнвентаризация.Ссылка);
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
					Команда.CommandText = @"Delete _Document593
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}