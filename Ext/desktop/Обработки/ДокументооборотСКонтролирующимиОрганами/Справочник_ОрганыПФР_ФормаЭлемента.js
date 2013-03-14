Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ОрганыПФР_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:535px;height:144px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Органы ПФР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:152px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:152px;top:58px;width:375px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:535px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:119px;width:535px;height:25px;',
			items:
			[
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
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:8px;top:92px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:152px;top:92px;width:375px;height:19px;',
		},
	]
});