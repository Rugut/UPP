Ext.define('Документы.ОтпускПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 784,
	iconCls: 'bogus',
	title: 'Отпуск по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:531px;width:680px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:784px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗаполнитьПлановые',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДанныеДляРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:555px;width:533px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:106px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:768px;height:386px;',
			height: 386,width: 768,
			items:
			[
				{
					title:'Пособия',
				},
				{
					title:'РасчетСреднего',
				},
				{
					title:'ПлановыеНачисления',
				},
				{
					title:'ПлановыеУдержания',
				},
				{
					title:'ЗаявлениеНаВыплатуПособия',
				},
				{
					title:'Документы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:106px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:206px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:478px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:578px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:478px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:564px;top:494px;width:83px;height:33px;',
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
			style: 'position:absolute;left:647px;top:494px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:555px;width:371px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
	]
});