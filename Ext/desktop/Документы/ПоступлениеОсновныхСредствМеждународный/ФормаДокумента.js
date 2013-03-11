Ext.define('Документы.ПоступлениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 650,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:333px;width:555px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:422px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:530px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:84px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьЗаПериод',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:108px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'УчитыватьКакОС',
				},
				{
					text:'ДатаПринятияКУчету',
				},
				{
					text:'МестонахождениеОбъекта',
				},
				{
					text:'МОЛ',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'СчетСниженияСтоимости',
				},
				{
					text:'НачислятьАмортизацию',
				},
				{
					text:'МетодНачисленияАмортизации',
				},
				{
					text:'СчетНачисленияАмортизации',
				},
				{
					text:'ПервоначальнаяСтоимость',
				},
				{
					text:'ЛиквидационнаяСтоимость',
				},
				{
					text:'КоэффициентУскорения',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'ПредполагаемыйОбъемПродукции',
				},
				{
					text:'СуммаНачисленнойАмортизации',
				},
				{
					text:'СчетУчетаНовый',
				},
				{
					text:'Субконто1Нов',
				},
				{
					text:'Субконто2Нов',
				},
				{
					text:'Субконто3Нов',
				},
				{
					text:'Сумма',
				},
				{
					text:'КоррСчет',
				},
				{
					text:'Субконто1Кт',
				},
				{
					text:'Субконто2Кт',
				},
				{
					text:'Субконто3Кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:622px;top:33px;width:19px;height:19px;',
		},
	]
});