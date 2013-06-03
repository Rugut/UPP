
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
	public partial class КорректировкаДолга:ДокументОбъект
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийКорректировкаДолга ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты КонтрагентДебитор {get;set;}//Дебитор
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Контрагенты КонтрагентКредитор {get;set;}//Кредитор
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(23)]
		public bool ИспользоватьВспомогательныйСчет {get;set;}//Использовать вспомогательный счет
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СчетДт {get;set;}//Вспомогательный счет дебиторской задолженности
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоДт1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоДт2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоДт3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СчетКт {get;set;}//Вспомогательный счет кредиторской задолженности
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СубконтоКт1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СубконтоКт2 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоКт3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетДтНУ {get;set;}//Счет списания дебиторской задолженности (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоДтНУ1 {get;set;}//Субконто 1 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СубконтоДтНУ2 {get;set;}//Субконто 2 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СубконтоДтНУ3 {get;set;}//Субконто 3 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СчетКтНУ {get;set;}//Счет списания кредиторской задолженности (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public object СубконтоКтНУ1 {get;set;}//Субконто 1 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public object СубконтоКтНУ2 {get;set;}//Субконто 2 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public object СубконтоКтНУ3 {get;set;}//Субконто 3 (НУ)
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
						Insert Into _Document419(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8820RRef
						,_Fld8821RRef
						,_Fld8822RRef
						,_Fld8823RRef
						,_Fld8824RRef
						,_Fld8825
						,_Fld8826
						,_Fld8827
						,_Fld8828RRef
						,_Fld8829
						,_Fld8830RRef
						,_Fld8831
						,_Fld8832
						,_Fld8833RRef
						,_Fld8834
						,_Fld8835RRef
						,_Fld8836RRef
						,_Fld8837RRef
						,_Fld8838RRef
						,_Fld8839RRef
						,_Fld8840RRef
						,_Fld8841RRef
						,_Fld8842RRef
						,_Fld8843RRef
						,_Fld8844RRef
						,_Fld8845RRef
						,_Fld8846RRef
						,_Fld8847RRef
						,_Fld8848RRef
						,_Fld8849RRef
						,_Fld8850RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ВидОперации
						,@Подразделение
						,@КонтрагентДебитор
						,@КонтрагентКредитор
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@Комментарий
						,@Ответственный
						,@ОтражатьВНалоговомУчете
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@ДоговорКонтрагента
						,@ИспользоватьВспомогательныйСчет
						,@СчетДт
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
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
						,@СубконтоКтНУ3)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document419
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8820RRef	= @Организация
						,_Fld8821RRef	= @ВидОперации
						,_Fld8822RRef	= @Подразделение
						,_Fld8823RRef	= @КонтрагентДебитор
						,_Fld8824RRef	= @КонтрагентКредитор
						,_Fld8825	= @ОтражатьВУправленческомУчете
						,_Fld8826	= @ОтражатьВБухгалтерскомУчете
						,_Fld8827	= @Комментарий
						,_Fld8828RRef	= @Ответственный
						,_Fld8829	= @ОтражатьВНалоговомУчете
						,_Fld8830RRef	= @ВалютаДокумента
						,_Fld8831	= @КурсДокумента
						,_Fld8832	= @КратностьДокумента
						,_Fld8833RRef	= @ДоговорКонтрагента
						,_Fld8834	= @ИспользоватьВспомогательныйСчет
						,_Fld8835RRef	= @СчетДт
						,_Fld8836RRef	= @СубконтоДт1
						,_Fld8837RRef	= @СубконтоДт2
						,_Fld8838RRef	= @СубконтоДт3
						,_Fld8839RRef	= @СчетКт
						,_Fld8840RRef	= @СубконтоКт1
						,_Fld8841RRef	= @СубконтоКт2
						,_Fld8842RRef	= @СубконтоКт3
						,_Fld8843RRef	= @СчетДтНУ
						,_Fld8844RRef	= @СубконтоДтНУ1
						,_Fld8845RRef	= @СубконтоДтНУ2
						,_Fld8846RRef	= @СубконтоДтНУ3
						,_Fld8847RRef	= @СчетКтНУ
						,_Fld8848RRef	= @СубконтоКтНУ1
						,_Fld8849RRef	= @СубконтоКтНУ2
						,_Fld8850RRef	= @СубконтоКтНУ3
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("ИспользоватьВспомогательныйСчет", ИспользоватьВспомогательныйСчет);
					Команда.Parameters.AddWithValue("СчетДт", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document419
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}