
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
	public partial class СписаниеМатериаловИзЭксплуатации:ДокументОбъект
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
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.Перечисления/*Ссылка*/.СпособыСписанияРасходов СпособСписанияРасходов {get;set;}//Способ списания расходов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СчетДт {get;set;}//Счет дебета
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СубконтоДт1 {get;set;}//Субконто дебета 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоДт2 {get;set;}//Субконто дебета 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоДт3 {get;set;}//Субконто дебета 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СчетДтНУ {get;set;}//Счет дебета (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоДтНУ1 {get;set;}//Субконто дебета 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоДтНУ2 {get;set;}//Субконто дебета 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоДтНУ3 {get;set;}//Субконто дебета 3 (налоговый учет)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидыНормативнойСтоимостиПроизводства ТипСтоимости {get;set;}//Тип стоимости
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.ПричиныСписания ПричинаСписания {get;set;}//Причина списания
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
						Insert Into _Document590(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17251
						,_Fld17252RRef
						,_Fld17253RRef
						,_Fld17254RRef
						,_Fld17255
						,_Fld17256
						,_Fld17257
						,_Fld17258RRef
						,_Fld17259RRef
						,_Fld17260RRef
						,_Fld17261RRef
						,_Fld17262RRef
						,_Fld17263RRef
						,_Fld17264RRef
						,_Fld17265RRef
						,_Fld17266RRef
						,_Fld17267RRef
						,_Fld17268RRef
						,_Fld17269RRef
						,_Fld17270RRef
						,_Fld17271RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВНалоговомУчете
						,@НоменклатурнаяГруппа
						,@Организация
						,@ПодразделениеОрганизации
						,@ОтражатьВБухгалтерскомУчете
						,@Комментарий
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@Ответственный
						,@СпособСписанияРасходов
						,@СтатьяЗатрат
						,@СчетДт
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@СчетДтНУ
						,@СубконтоДтНУ1
						,@СубконтоДтНУ2
						,@СубконтоДтНУ3
						,@ТипСтоимости
						,@ПричинаСписания)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document590
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17251	= @ОтражатьВНалоговомУчете
						,_Fld17252RRef	= @НоменклатурнаяГруппа
						,_Fld17253RRef	= @Организация
						,_Fld17254RRef	= @ПодразделениеОрганизации
						,_Fld17255	= @ОтражатьВБухгалтерскомУчете
						,_Fld17256	= @Комментарий
						,_Fld17257	= @ОтражатьВУправленческомУчете
						,_Fld17258RRef	= @Подразделение
						,_Fld17259RRef	= @Ответственный
						,_Fld17260RRef	= @СпособСписанияРасходов
						,_Fld17261RRef	= @СтатьяЗатрат
						,_Fld17262RRef	= @СчетДт
						,_Fld17263RRef	= @СубконтоДт1
						,_Fld17264RRef	= @СубконтоДт2
						,_Fld17265RRef	= @СубконтоДт3
						,_Fld17266RRef	= @СчетДтНУ
						,_Fld17267RRef	= @СубконтоДтНУ1
						,_Fld17268RRef	= @СубконтоДтНУ2
						,_Fld17269RRef	= @СубконтоДтНУ3
						,_Fld17270RRef	= @ТипСтоимости
						,_Fld17271RRef	= @ПричинаСписания
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СпособСписанияРасходов", СпособСписанияРасходов.Ключ());
					Команда.Parameters.AddWithValue("СчетДт", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетДтНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДтНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("ТипСтоимости", ТипСтоимости.Ключ());
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
					Команда.CommandText = @"Delete _Document590
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}