Ext.define('Обработки.ПечатьПрайсЛиста.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать прайс-листа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Отбор',
				},
				{
					text:'Сформировать',
				},
				'-',
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:57px;width:657px;height:46px;',
			height: 46,width: 657,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:216px;top:1px;width:441px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура',
			style: 'position:absolute;left:0px;top:1px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ценовая группа',
			style: 'position:absolute;left:0px;top:24px;width:104px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиЦеноваяГруппа',
			style: 'position:absolute;left:216px;top:24px;width:441px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиТипЦен',
			style: 'position:absolute;left:223px;top:105px;width:441px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип цен',
			style: 'position:absolute;left:7px;top:105px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:299px;top:33px;width:365px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:223px;top:33px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:116px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:7px;top:33px;width:104px;height:19px;text-align:left;',
		},
	]
});