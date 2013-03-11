Ext.define('Документы.НевыходыВОрганизациях.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 431,width: 652,
	iconCls: 'bogus',
	title: 'Невыходы в организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:378px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:137px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:161px;width:636px;height:170px;',
			height: 170,width: 636,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Авторасчет',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'ОплачиватьЧасов',
				},
				{
					text:'НормаДней',
				},
				{
					text:'НормаЧасов',
				},
				{
					text:'Сторно',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Результат',
				},
				{
					text:'ОплаченоДнейЧасов',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'НормаДнейПоПятидневке',
				},
				{
					text:'ОтработаноДнейПоПятидневке',
				},
				{
					text:'НормаЧасовПоПятидневке',
				},
				{
					text:'ОтработаноЧасовПоПятидневке',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаНачало',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаОкончание',
				},
				{
					text:'ДатаНачалаСобытия',
				},
				{
					text:'СторнируемыйДокумент',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'РассчитатьНачисления',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СписокРаботников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:406px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:340px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:515px;top:340px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:406px;width:246px;height:25px;',
			items:
			[
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'Исправить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:219px;width:636px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});