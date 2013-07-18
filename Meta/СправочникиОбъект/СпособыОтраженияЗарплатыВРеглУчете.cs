
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
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СпособыОтраженияЗарплатыВРеглУчете:СправочникОбъект
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
		public V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public object СчетДт {get;set;}//Счет Дт
		[DataMember]
		[ProtoMember(10)]
		public object СубконтоДт1 {get;set;}//Субконто Дт номер 1
		[DataMember]
		[ProtoMember(11)]
		public object СубконтоДт2 {get;set;}//Субконто Дт номер 2
		[DataMember]
		[ProtoMember(12)]
		public object СубконтоДт3 {get;set;}//Субконто Дт номер 3
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск СпособРаспределенияЗатрат {get;set;}//Способ распределения затрат
		[DataMember]
		[ProtoMember(14)]
		public object СчетКт {get;set;}//Счет Кт
		[DataMember]
		[ProtoMember(15)]
		public object СубконтоКт1 {get;set;}//Субконто Кт номер 1
		[DataMember]
		[ProtoMember(16)]
		public object СубконтоКт2 {get;set;}//Субконто Кт номер 2
		[DataMember]
		[ProtoMember(17)]
		public object СубконтоКт3 {get;set;}//Субконто Кт номер 3
		[DataMember]
		[ProtoMember(18)]
		public object СчетДтНУ {get;set;}//Счет дебета налогового учета
		[DataMember]
		[ProtoMember(19)]
		public object СубконтоДтНУ1 {get;set;}//Субконто Дт нал. учета номер 1
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоДтНУ2 {get;set;}//Субконто Дт нал. учета номер 2
		[DataMember]
		[ProtoMember(21)]
		public object СубконтоДтНУ3 {get;set;}//Субконто Дт нал. учета номер 3
		[DataMember]
		[ProtoMember(22)]
		public object СчетКтНУ {get;set;}//Счет кредита налогового учета
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоКтНУ1 {get;set;}//Субконто Кт нал. учета номер 1
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоКтНУ2 {get;set;}//Субконто Кт нал. учета номер 2
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоКтНУ3 {get;set;}//Субконто Кт нал. учета номер 3
		[DataMember]
		[ProtoMember(26)]
		public V82.Перечисления/*Ссылка*/.ОтражениеВУСН ОтражениеВУСН {get;set;}//Отражение ВУСН
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеДт {get;set;}//Подразделение Дт
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеКт {get;set;}//Подразделение Кт
		[DataMember]
		[ProtoMember(29)]
		public V82.Перечисления/*Ссылка*/.ВидыНачисленийОплатыТрудаПоСт255НК ВидНачисленийОплатыТрудаПоСтатье255НК {get;set;}//Вид начислений оплаты труда по статье255 НК
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
						Insert Into _Reference155(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Description
						,_Fld1876RRef
						,_Fld1877RRef
						,_Fld1878RRef
						,_Fld1879RRef
						,_Fld1880RRef
						,_Fld1881RRef
						,_Fld1882RRef
						,_Fld1883RRef
						,_Fld1884RRef
						,_Fld1885RRef
						,_Fld1886RRef
						,_Fld1887RRef
						,_Fld1888RRef
						,_Fld1889RRef
						,_Fld1890RRef
						,_Fld1891RRef
						,_Fld1892RRef
						,_Fld1893RRef
						,_Fld26611RRef
						,_Fld26612RRef
						,_Fld26613RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Наименование
						,@СчетДт
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@СпособРаспределенияЗатрат
						,@СчетКт
						,@СубконтоКт1
						,@СубконтоКт2
						,@СубконтоКт3
						,@СчетДтНУ
						,@СубконтоДтНУ1
						,@СубконтоДтНУ2
						,@СубконтоДтНУ3
						,@СчетКтНУ
						,@СубконтоКтНУ1
						,@СубконтоКтНУ2
						,@СубконтоКтНУ3
						,@ОтражениеВУСН
						,@ПодразделениеДт
						,@ПодразделениеКт
						,@ВидНачисленийОплатыТрудаПоСтатье255НК)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference155
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Description	= @Наименование
						,_Fld1876RRef	= @СчетДт
						,_Fld1877RRef	= @СубконтоДт1
						,_Fld1878RRef	= @СубконтоДт2
						,_Fld1879RRef	= @СубконтоДт3
						,_Fld1880RRef	= @СпособРаспределенияЗатрат
						,_Fld1881RRef	= @СчетКт
						,_Fld1882RRef	= @СубконтоКт1
						,_Fld1883RRef	= @СубконтоКт2
						,_Fld1884RRef	= @СубконтоКт3
						,_Fld1885RRef	= @СчетДтНУ
						,_Fld1886RRef	= @СубконтоДтНУ1
						,_Fld1887RRef	= @СубконтоДтНУ2
						,_Fld1888RRef	= @СубконтоДтНУ3
						,_Fld1889RRef	= @СчетКтНУ
						,_Fld1890RRef	= @СубконтоКтНУ1
						,_Fld1891RRef	= @СубконтоКтНУ2
						,_Fld1892RRef	= @СубконтоКтНУ3
						,_Fld1893RRef	= @ОтражениеВУСН
						,_Fld26611RRef	= @ПодразделениеДт
						,_Fld26612RRef	= @ПодразделениеКт
						,_Fld26613RRef	= @ВидНачисленийОплатыТрудаПоСтатье255НК
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("СчетДт", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СпособРаспределенияЗатрат", СпособРаспределенияЗатрат.Ссылка);
					Команда.Parameters.AddWithValue("СчетКт", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетДтНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетКтНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКтНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКтНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКтНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("ОтражениеВУСН", ОтражениеВУСН.Ключ());
					Команда.Parameters.AddWithValue("ПодразделениеДт", ПодразделениеДт.Ссылка);
					Команда.Parameters.AddWithValue("ПодразделениеКт", ПодразделениеКт.Ссылка);
					Команда.Parameters.AddWithValue("ВидНачисленийОплатыТрудаПоСтатье255НК", ВидНачисленийОплатыТрудаПоСтатье255НК.Ключ());
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
					Команда.CommandText = @"Delete _Reference155
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void УстановитьТипыСубконто(/*Счет, ДтКт*/)
		{
			//ВидыСубконтоСчета = Счет.ВидыСубконто;
		}

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*Не ЭтоГруппа*/)
			{
				//УстановитьТипыСубконто(СчетДт,   "Дт");
				//УстановитьТипыСубконто(СчетДтНУ, "ДтНУ");
				//УстановитьТипыСубконто(СчетКт,   "Кт");
				//УстановитьТипыСубконто(СчетКтНУ, "КтНУ");
			}
		}
	}
}