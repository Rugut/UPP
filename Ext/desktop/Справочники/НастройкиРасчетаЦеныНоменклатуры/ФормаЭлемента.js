Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 419,width: 531,
	iconCls: 'bogus',
	title: 'Настройка расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:531px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыполнитьБезРегламентногоЗадания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:394px;width:531px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:515px;height:275px;',
			height: 275,width: 515,
			items:
			[
				{
					title:'ПорядокРасчета',
				},
				{
					title:'АвтоматическоеФормированиеДокументов',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:57px;width:424px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:99px;top:33px;width:424px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:367px;width:436px;height:19px;',
		},
	]
});