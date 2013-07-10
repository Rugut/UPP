
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
	///(общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КомплектацияНоменклатуры:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыКомплектации ВидКомплектации {get;set;}//Вид комплектации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийКомплектацияНоменклатуры ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ЕдиницыИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения номенклатуры
		[DataMember]
		[ProtoMember(12)]
		public object ЗаказВыпуска {get;set;}//Заказ выпуска
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public object ЗаказРезерв {get;set;}//Заказ резерв
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.3)*/ Количество {get;set;}//Количество номенклатуры
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.3)*/ Коэффициент {get;set;}//Коэффициент номенклатуры
		///<summary>
		///Необходимые действия по включению или исключению НДС в тоимости товаров при перемещении
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ДействиеНДСВСтоимостиТоваров НДСвСтоимостиТоваров {get;set;}//НДС в стоимости
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СпецификацииНоменклатуры Спецификация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.Перечисления/*Ссылка*/.СпособыСписанияОстаткаТоваров СпособСписанияОстаткаТоваров {get;set;}//Способ списания комплекта
		///<summary>
		///Статус партии
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.Перечисления/*Ссылка*/.СтатусыПартийТоваров СтатусПартии {get;set;}//Статус партии
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатратСписанияНДС {get;set;}//Статья затрат списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаБУ {get;set;}//Счет учета комплекта (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СчетУчетаНУ {get;set;}//Счет учета комплекта (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетСписанияНДС {get;set;}//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СубконтоСписанияНДС1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public object СубконтоСписанияНДС2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public object СубконтоСписанияНДС3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public object СчетСписанияНДСНУ {get;set;}//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public object СубконтоСписанияНДСНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public object СубконтоСписанияНДСНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public object СубконтоСписанияНДСНУ3 {get;set;}//Субконто 3 (налоговый учет)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаНоменклатуры {get;set;}//Характеристика номенклатуры
		[DataMember]
		[ProtoMember(44)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(45)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(46)]
		public object СчетЗатрат {get;set;}//Счет затрат (БУ)
		[DataMember]
		[ProtoMember(47)]
		public object СчетЗатратНУ {get;set;}//Счет затрат (НУ)
		[DataMember]
		[ProtoMember(48)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		[DataMember]
		[ProtoMember(49)]
		public object Заказ {get;set;}//Заказ затрат
		///<summary>
		///(Общ) Цена, по которой материал был передан в переработку
		///</summary>
		[DataMember]
		[ProtoMember(50)]
		public decimal/*(15.2)*/ ЦенаПередачи {get;set;}//Цена передачи
		///<summary>
		///(Общ) Сумма, на которую материал был передан в переработку
		///</summary>
		[DataMember]
		[ProtoMember(51)]
		public decimal/*(15.2)*/ СуммаПередачи {get;set;}//Сумма передачи
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
						Insert Into _Document299(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld18967RRef
						,_Fld5498RRef
						,_Fld5499RRef
						,_Fld5501
						,_Fld5502
						,_Fld5503
						,_Fld5504RRef
						,_Fld5505RRef
						,_Fld18406RRef
						,_Fld5506RRef
						,_Fld5507RRef
						,_Fld5508
						,_Fld5509
						,_Fld5510
						,_Fld5511RRef
						,_Fld18408RRef
						,_Fld5512RRef
						,_Fld5513RRef
						,_Fld18969RRef
						,_Fld5514RRef
						,_Fld5515RRef
						,_Fld18407RRef
						,_Fld5517RRef
						,_Fld5518RRef
						,_Fld18398RRef
						,_Fld18399RRef
						,_Fld18400RRef
						,_Fld18401RRef
						,_Fld18402RRef
						,_Fld18403RRef
						,_Fld18404RRef
						,_Fld18405RRef
						,_Fld5519RRef
						,_Fld18970RRef
						,_Fld18971RRef
						,_Fld18972RRef
						,_Fld18973RRef
						,_Fld18974RRef
						,_Fld18976
						,_Fld18977)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидКомплектации
						,@ВидОперации
						,@ЕдиницаИзмерения
						,@Количество
						,@Комментарий
						,@Коэффициент
						,@НДСвСтоимостиТоваров
						,@Номенклатура
						,@НоменклатурнаяГруппа
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@ПодразделениеОрганизации
						,@СерияНоменклатуры
						,@Склад
						,@Спецификация
						,@СпособСписанияОстаткаТоваров
						,@СтатусПартии
						,@СтатьяЗатратСписанияНДС
						,@СчетУчетаБУ
						,@СчетУчетаНУ
						,@СчетСписанияНДС
						,@СубконтоСписанияНДС1
						,@СубконтоСписанияНДС2
						,@СубконтоСписанияНДС3
						,@СчетСписанияНДСНУ
						,@СубконтоСписанияНДСНУ1
						,@СубконтоСписанияНДСНУ2
						,@СубконтоСписанияНДСНУ3
						,@ХарактеристикаНоменклатуры
						,@Контрагент
						,@ДоговорКонтрагента
						,@СчетЗатрат
						,@СчетЗатратНУ
						,@СтатьяЗатрат
						,@ЦенаПередачи
						,@СуммаПередачи)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document299
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld18967RRef	= @ВидКомплектации
						,_Fld5498RRef	= @ВидОперации
						,_Fld5499RRef	= @ЕдиницаИзмерения
						,_Fld5501	= @Количество
						,_Fld5502	= @Комментарий
						,_Fld5503	= @Коэффициент
						,_Fld5504RRef	= @НДСвСтоимостиТоваров
						,_Fld5505RRef	= @Номенклатура
						,_Fld18406RRef	= @НоменклатурнаяГруппа
						,_Fld5506RRef	= @Организация
						,_Fld5507RRef	= @Ответственный
						,_Fld5508	= @ОтражатьВБухгалтерскомУчете
						,_Fld5509	= @ОтражатьВНалоговомУчете
						,_Fld5510	= @ОтражатьВУправленческомУчете
						,_Fld5511RRef	= @Подразделение
						,_Fld18408RRef	= @ПодразделениеОрганизации
						,_Fld5512RRef	= @СерияНоменклатуры
						,_Fld5513RRef	= @Склад
						,_Fld18969RRef	= @Спецификация
						,_Fld5514RRef	= @СпособСписанияОстаткаТоваров
						,_Fld5515RRef	= @СтатусПартии
						,_Fld18407RRef	= @СтатьяЗатратСписанияНДС
						,_Fld5517RRef	= @СчетУчетаБУ
						,_Fld5518RRef	= @СчетУчетаНУ
						,_Fld18398RRef	= @СчетСписанияНДС
						,_Fld18399RRef	= @СубконтоСписанияНДС1
						,_Fld18400RRef	= @СубконтоСписанияНДС2
						,_Fld18401RRef	= @СубконтоСписанияНДС3
						,_Fld18402RRef	= @СчетСписанияНДСНУ
						,_Fld18403RRef	= @СубконтоСписанияНДСНУ1
						,_Fld18404RRef	= @СубконтоСписанияНДСНУ2
						,_Fld18405RRef	= @СубконтоСписанияНДСНУ3
						,_Fld5519RRef	= @ХарактеристикаНоменклатуры
						,_Fld18970RRef	= @Контрагент
						,_Fld18971RRef	= @ДоговорКонтрагента
						,_Fld18972RRef	= @СчетЗатрат
						,_Fld18973RRef	= @СчетЗатратНУ
						,_Fld18974RRef	= @СтатьяЗатрат
						,_Fld18976	= @ЦенаПередачи
						,_Fld18977	= @СуммаПередачи
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидКомплектации", ВидКомплектации.Ключ());
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Количество", Количество);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Коэффициент", Коэффициент);
					Команда.Parameters.AddWithValue("НДСвСтоимостиТоваров", НДСвСтоимостиТоваров.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СпособСписанияОстаткаТоваров", СпособСписанияОстаткаТоваров.Ключ());
					Команда.Parameters.AddWithValue("СтатусПартии", СтатусПартии.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДСНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетЗатрат", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетЗатратНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("ЦенаПередачи", ЦенаПередачи);
					Команда.Parameters.AddWithValue("СуммаПередачи", СуммаПередачи);
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
					Команда.CommandText = @"Delete _Document299
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}