Ext.require(['Данные.Справочники.ВидыСчетчиковДляЗначенийРазрядов'], function () 
{
	Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:215px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Виды счетчиков для значений разрядов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:311px;top:33px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 55,
			height: 19,
			style: 'position:absolute;left:337px;top:33px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 191,
			height: 19,
			style: 'position:absolute;left:117px;top:33px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмерСчетчика',
			text: 'Размер счетчика:',
			style: 'position:absolute;left:8px;top:56px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РазмерСчетчика',
			style: 'position:absolute;left:117px;top:56px;width:50px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В пределах организации',
			style: 'position:absolute;left:8px;top:104px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В пределах подразделения',
			style: 'position:absolute;left:8px;top:125px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В пределах номенклатурной группы',
			style: 'position:absolute;left:8px;top:146px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В пределах номенклатуры',
			style: 'position:absolute;left:8px;top:167px;width:384px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачальноеЗначение',
			text: 'Начальное значение:',
			style: 'position:absolute;left:8px;top:79px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачальноеЗначение',
			style: 'position:absolute;left:117px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонечноеЗначение',
			text: 'Конечное значение:',
			style: 'position:absolute;left:202px;top:79px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КонечноеЗначение',
			style: 'position:absolute;left:312px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:190px;width:400px;height:25px;',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});