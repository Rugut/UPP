
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
	///(Общ) Таможенная декларация по импорту
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ГТДИмпорт:ДокументОбъект
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
		public V82.СправочникиСсылка.НомераГТД НомерГТД {get;set;}//Номер ГТД
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Валютный депозит
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ) договор контрагента с таможней, по которому взаиморасчеты осуществляются в валюте регл. учета
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагентаРегл {get;set;}//Депозит на таможне (руб.)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ) Таможенный сбор в валюте взаиморасчетов с таможней
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(15.2)*/ ТаможенныйСборВал {get;set;}//Таможенный сбор валютный
		///<summary>
		///(Общ) Таможенный сбор в валюте регламентированного учета
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public decimal/*(15.2)*/ ТаможенныйСбор {get;set;}//Таможенный сбор
		///<summary>
		///(Общ) Штраф от таможни в валюте взаиморасчетов с таможней
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ ТаможенныйШтрафВал {get;set;}//Таможенный штраф в валюте
		///<summary>
		///(Общ) Штраф от таможни в валюте регламентированного учета
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ ТаможенныйШтраф {get;set;}//Таможенный штраф
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с таможней
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовРасходов {get;set;}//Статья прочих доходов расходов
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СчетУчетаРасходовБУ {get;set;}//Счет учета расходов по штрафам (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетУчетаРасходовНУ {get;set;}//Счет учета расходов по штрафам (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаРасчетовСКонтрагентомВал {get;set;}//Счет учета расчетов с таможней (вал.)
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовРасходовВал {get;set;}//Статья прочих доходов расходов (вал.)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетУчетаРасходовБУВал {get;set;}//Счет учета расходов по штрафам (БУ) (вал.)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СчетУчетаРасходовНУВал {get;set;}//Счет учета расходов по штрафам (НУ) (вал.)
		[DataMember]
		[ProtoMember(37)]
		public object Проект {get;set;}
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
						Insert Into _Document352(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6695RRef
						,_Fld6696RRef
						,_Fld6697RRef
						,_Fld6698
						,_Fld6699
						,_Fld6700RRef
						,_Fld6701RRef
						,_Fld6702
						,_Fld6703
						,_Fld6704RRef
						,_Fld6705
						,_Fld6706
						,_Fld6707
						,_Fld6708RRef
						,_Fld6709RRef
						,_Fld6710
						,_Fld6711
						,_Fld6712
						,_Fld6713
						,_Fld6714
						,_Fld6715RRef
						,_Fld6716RRef
						,_Fld6717RRef
						,_Fld6718RRef
						,_Fld6719RRef
						,_Fld6720RRef
						,_Fld6721RRef
						,_Fld6722RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@НомерГТД
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@Контрагент
						,@ДоговорКонтрагента
						,@КурсВзаиморасчетов
						,@КратностьВзаиморасчетов
						,@ДоговорКонтрагентаРегл
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@Ответственный
						,@Комментарий
						,@ТаможенныйСборВал
						,@ТаможенныйСбор
						,@ТаможенныйШтрафВал
						,@ТаможенныйШтраф
						,@СчетУчетаРасчетовСКонтрагентом
						,@СтатьяПрочихДоходовРасходов
						,@СчетУчетаРасходовБУ
						,@СчетУчетаРасходовНУ
						,@СчетУчетаРасчетовСКонтрагентомВал
						,@СтатьяПрочихДоходовРасходовВал
						,@СчетУчетаРасходовБУВал
						,@СчетУчетаРасходовНУВал)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document352
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6695RRef	= @Организация
						,_Fld6696RRef	= @НомерГТД
						,_Fld6697RRef	= @ВалютаДокумента
						,_Fld6698	= @КурсДокумента
						,_Fld6699	= @КратностьДокумента
						,_Fld6700RRef	= @Контрагент
						,_Fld6701RRef	= @ДоговорКонтрагента
						,_Fld6702	= @КурсВзаиморасчетов
						,_Fld6703	= @КратностьВзаиморасчетов
						,_Fld6704RRef	= @ДоговорКонтрагентаРегл
						,_Fld6705	= @ОтражатьВУправленческомУчете
						,_Fld6706	= @ОтражатьВБухгалтерскомУчете
						,_Fld6707	= @ОтражатьВНалоговомУчете
						,_Fld6708RRef	= @Подразделение
						,_Fld6709RRef	= @Ответственный
						,_Fld6710	= @Комментарий
						,_Fld6711	= @ТаможенныйСборВал
						,_Fld6712	= @ТаможенныйСбор
						,_Fld6713	= @ТаможенныйШтрафВал
						,_Fld6714	= @ТаможенныйШтраф
						,_Fld6715RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld6716RRef	= @СтатьяПрочихДоходовРасходов
						,_Fld6717RRef	= @СчетУчетаРасходовБУ
						,_Fld6718RRef	= @СчетУчетаРасходовНУ
						,_Fld6719RRef	= @СчетУчетаРасчетовСКонтрагентомВал
						,_Fld6720RRef	= @СтатьяПрочихДоходовРасходовВал
						,_Fld6721RRef	= @СчетУчетаРасходовБУВал
						,_Fld6722RRef	= @СчетУчетаРасходовНУВал
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ТаможенныйСборВал", ТаможенныйСборВал);
					Команда.Parameters.AddWithValue("ТаможенныйСбор", ТаможенныйСбор);
					Команда.Parameters.AddWithValue("ТаможенныйШтрафВал", ТаможенныйШтрафВал);
					Команда.Parameters.AddWithValue("ТаможенныйШтраф", ТаможенныйШтраф);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомВал", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовБУВал", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовНУВал", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document352
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}