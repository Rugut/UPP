Ext.define('Отчеты.ОборотыМеждуСубконтоХозрасчетный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет Обороты между субконто',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:20px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:80px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:168px;top:33px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:200px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:340px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:416px;top:33px;width:216px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:33px;width:24px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Възстанови стойностите...',
				},
				{
					text:'Съхрани стойностите...',
				},
				'-',
				{
					text:'Затвори',
				},
			]
		},
	]
});