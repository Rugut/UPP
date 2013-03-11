Ext.define('Документы.ВнутреннееПеремещениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 626,
	iconCls: 'bogus',
	title: 'Внутреннее перемещение основных средств (международный)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:349px;width:528px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:57px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:416px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:516px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:610px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:610px;height:220px;',
			height: 220,width: 610,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'МестонахождениеОбъекта',
				},
				{
					text:'МестонахождениеОбъектаНов',
				},
				{
					text:'МОЛ',
				},
				{
					text:'МОЛНов',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНов',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто1Нов',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто2Нов',
				},
				{
					text:'Субконто3',
				},
				{
					text:'Субконто3Нов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:626px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:598px;top:33px;width:20px;height:19px;',
		},
	]
});