Ext.define('Справочники.МедицинскиеОрганизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:565px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинские организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:8px;top:84px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:55px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:8px;top:59px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:55px;top:59px;width:326px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:387px;top:59px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресКодПоКЛАДР',
			style: 'position:absolute;left:477px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:565px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:443px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
	]
});