Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 238,width: 400,
	iconCls: 'bogus',
	title: 'Настройки регламентного формирования документов по НДС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:135px;top:57px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:135px;top:33px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:135px;top:81px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:135px;top:186px;width:257px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:384px;height:76px;',
			height: 76,width: 384,
			items:
			[
				{
					title:'АвтоматическоеВыполнение',
					items:
					[
					]
				},
			]
		},
	]
});