Ext.define('Документы.ДокументРасчетовСКонтрагентом.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 609,
	iconCls: 'bogus',
	title: 'Документы расчетов с контрагентом (ручной учет)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:192px;width:593px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'СоздатьИВыбрать',
				},
				{
					text:'Просмотр',
				},
				{
					text:'ОбновитьСписок',
				},
				{
					text:'Действие3',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:217px;width:593px;height:225px;',
			height: 225,width: 593,
			columns:
			[
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'Остаток',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачПериода',
			style: 'position:absolute;left:94px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонПериода',
			style: 'position:absolute;left:194px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РежимОтбораДокументов',
			style: 'position:absolute;left:94px;top:53px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:77px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:94px;top:149px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:316px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:94px;top:125px;width:220px;height:19px;',
		},
	]
});