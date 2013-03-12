Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:497px;height:143px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:377px;top:33px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:409px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:119px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:91px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:119px;top:91px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДвиженияДенежныхСредств',
			text: 'Вид движения 
денежных средств:',
			style: 'position:absolute;left:8px;top:54px;width:106px;height:31px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДвиженияДенежныхСредств',
			style: 'position:absolute;left:119px;top:56px;width:370px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:497px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:118px;width:497px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});