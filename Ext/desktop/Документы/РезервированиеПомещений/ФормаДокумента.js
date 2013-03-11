Ext.define('Документы.РезервированиеПомещений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 309,width: 378,
	iconCls: 'bogus',
	title: 'Резервирование помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:378px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:378px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРезервирования',
			style: 'position:absolute;left:96px;top:109px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:182px;width:362px;height:41px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:96px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:134px;width:362px;height:19px;',
			height: 19,width: 362,
			items:
			[
				{
					title:'Занято',
				},
				{
					title:'Недоступно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:114px;top:233px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:257px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:290px;top:233px;width:80px;height:19px;',
		},
	]
});