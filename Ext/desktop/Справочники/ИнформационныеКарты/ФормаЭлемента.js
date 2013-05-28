Ext.define('Справочники.ИнформационныеКарты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:468px;height:205px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Информационные карты',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:344px;top:33px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 88,
			height: 19,
			style: 'position:absolute;left:372px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 237,
			height: 19,
			style: 'position:absolute;left:101px;top:33px;width:237px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодКарты',
			text: 'Код карты:',
			style: 'position:absolute;left:8px;top:81px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекущийКодКарты',
			width: 359,
			height: 19,
			style: 'position:absolute;left:101px;top:81px;width:359px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелецКарты',
			text: 'Владелец карты:',
			style: 'position:absolute;left:8px;top:129px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВладелецКарты',
			width: 359,
			height: 19,
			style: 'position:absolute;left:101px;top:129px;width:359px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКарты',
			text: 'Вид карты:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипКарты',
			text: 'Тип карты:',
			style: 'position:absolute;left:8px;top:105px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипШтрихКода',
			text: 'Тип штрихкода:',
			style: 'position:absolute;left:284px;top:57px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДисконтнойКарты',
			text: 'Вид диск. карты:',
			style: 'position:absolute;left:8px;top:153px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ВидДисконтнойКарты',
			width: 359,
			height: 19,
			style: 'position:absolute;left:101px;top:153px;width:359px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидКарты',
			width: 177,
			height: 19,
			style: 'position:absolute;left:101px;top:57px;width:177px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипКарты',
			width: 359,
			height: 19,
			style: 'position:absolute;left:101px;top:105px;width:359px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТипШтрихкода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:372px;top:57px;width:88px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:468px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:180px;width:468px;height:25px;',
			dock: 'bottom',
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
	]
});