Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 616,
	iconCls: 'bogus',
	title: 'Способы отражения расходов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:568px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:430px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:514px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:616px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
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
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:600px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:600px;height:246px;',
			height: 246,width: 600,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'Проект',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидАналитики',
				},
				{
					text:'ВидАналитикиДоп',
				},
				{
					text:'ВидСубконто1',
				},
				{
					text:'ВидСубконто2',
				},
				{
					text:'ВидСубконто3',
				},
				{
					text:'ВидСубконтоНУ1',
				},
				{
					text:'ВидСубконтоНУ2',
				},
				{
					text:'ВидСубконтоНУ3',
				},
				{
					text:'Аналитика',
				},
				{
					text:'НоменклатурнаяГруппа',
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
					text:'СубконтоНУ1',
				},
				{
					text:'СубконтоНУ2',
				},
				{
					text:'СубконтоНУ3',
				},
				{
					text:'Продукция',
				},
				{
					text:'ХарактеристикаПродукции',
				},
				{
					text:'СерияПродукции',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'СпособСтроительства',
				},
				{
					text:'Коэффициент',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:514px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратНаВыпуск',
			style: 'position:absolute;left:228px;top:80px;width:380px;height:19px;',
		},
	]
});