Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:493px;height:251px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор основных фондов',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 261,
			height: 19,
			style: 'position:absolute;left:48px;top:33px;width:261px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:64px;width:88px;height:35px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:105px;top:58px;width:380px;height:44px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Контрольное число:',
			style: 'position:absolute;left:320px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтрольноеЧисло',
			width: 43,
			height: 19,
			style: 'position:absolute;left:439px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Наименование полное:',
			style: 'position:absolute;left:8px;top:108px;width:88px;height:57px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеГруппировки',
			style: 'position:absolute;left:106px;top:108px;width:379px;height:58px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:8px;top:185px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'АмортизационнаяГруппа',
			width: 325,
			height: 19,
			style: 'position:absolute;left:160px;top:185px;width:325px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:493px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:226px;width:493px;height:25px;',
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