Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:370px;height:104px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Графа 10. Документы (ввод реквизитов)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокВыбор',
			width: 205,
			height: 19,
			style: 'position:absolute;left:157px;top:5px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокВыбор',
			text: 'Наименование документа',
			style: 'position:absolute;left:8px;top:5px;width:144px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокДата',
			width: 83,
			height: 19,
			style: 'position:absolute;left:157px;top:53px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокНомер',
			width: 205,
			height: 19,
			style: 'position:absolute;left:157px;top:29px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокДата',
			text: 'Дата документа',
			style: 'position:absolute;left:8px;top:53px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокНомер',
			text: 'Номер документа',
			style: 'position:absolute;left:8px;top:29px;width:144px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:79px;width:370px;height:25px;',
			width: 370,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Кнопка применить изменения, закрыть форму',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});