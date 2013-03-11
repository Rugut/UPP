Ext.define('Документы.ОбесценениеАктивовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 433,width: 444,
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
			style: 'position:absolute;left:194px;top:33px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАктива',
			style: 'position:absolute;left:94px;top:81px;width:342px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:428px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:156px;width:428px;height:220px;',
			height: 220,width: 428,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'СчетРезерва',
				},
				{
					text:'Объект',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:444px;height:25px;',
			items:
			[
				{
					text:'Действие1',
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
					text:'Печать',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:105px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:381px;width:342px;height:19px;',
		},
	]
});