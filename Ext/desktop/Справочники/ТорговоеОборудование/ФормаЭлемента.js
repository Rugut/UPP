Ext.define('Справочники.ТорговоеОборудование.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:468px;height:153px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Торговое оборудование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:468px;height:25px;',
			items:
			[
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Найти в списке',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'',
				},
				{
					text:'Справка',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Записать и закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:128px;width:468px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:348px;top:33px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:380px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбработкаОбслуживания',
			text: 'Обработка обслуживания:',
			style: 'position:absolute;left:8px;top:78px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбработкаОбслуживания',
			style: 'position:absolute;left:148px;top:78px;width:312px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМодель',
			text: 'Модель:',
			style: 'position:absolute;left:8px;top:102px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Модель',
			style: 'position:absolute;left:148px;top:102px;width:312px;height:19px;',
		},
	]
});