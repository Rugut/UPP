Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 243,width: 458,
	iconCls: 'bogus',
	title: 'Настройка допроведения документов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:33px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:191px;width:347px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:458px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:218px;width:458px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:442px;height:124px;',
			height: 124,width: 442,
			items:
			[
				{
					title:'Параметры',
				},
				{
					title:'АвтоматическоеВыполнение',
				},
			]
		},
	]
});