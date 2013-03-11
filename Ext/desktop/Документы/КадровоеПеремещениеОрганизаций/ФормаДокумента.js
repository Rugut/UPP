Ext.define('Документы.КадровоеПеремещениеОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 506,width: 632,
	iconCls: 'bogus',
	title: 'Кадровое перемещение организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:454px;width:528px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:632px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие2',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:481px;width:364px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентИндексацииЗаработка',
			style: 'position:absolute;left:248px;top:108px;width:68px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:335px;top:33px;width:289px;height:94px;',
			height: 94,width: 289,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:616px;height:278px;',
			height: 278,width: 616,
			items:
			[
				{
					title:'Работники',
				},
				{
					title:'Начисления',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:411px;top:415px;width:83px;height:33px;',
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
			style: 'position:absolute;left:495px;top:415px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:481px;width:268px;height:25px;',
			items:
			[
				{
					text:'СписокСотрудников',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});