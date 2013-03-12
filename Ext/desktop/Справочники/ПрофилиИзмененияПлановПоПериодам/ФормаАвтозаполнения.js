Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:296px;height:268px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры изменения по периодам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:243px;width:296px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовРаспределения',
			style: 'position:absolute;left:168px;top:54px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоПериодовРаспределения',
			text: 'Количество периодов:',
			style: 'position:absolute;left:14px;top:54px;width:152px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СмещениеПервогоПериодаРаспределения',
			style: 'position:absolute;left:168px;top:30px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмещениеПервогоПериодаРаспределения',
			text: 'Смещение первого периода :',
			style: 'position:absolute;left:14px;top:30px;width:152px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовыйКоэффициент',
			style: 'position:absolute;left:124px;top:192px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазовыйКоэффициент',
			text: 'Базовое значение:',
			style: 'position:absolute;left:14px;top:192px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПриращениеЗаПериод',
			style: 'position:absolute;left:124px;top:216px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПриращениеЗаПериод',
			text: 'Изменение:',
			style: 'position:absolute;left:14px;top:216px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРаспределения',
			text: 'Тип распределения:',
			style: 'position:absolute;left:14px;top:111px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипРаспределения',
			style: 'position:absolute;left:124px;top:111px;width:164px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИзменения',
			text: 'Тип расчета:',
			style: 'position:absolute;left:14px;top:135px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипИзменения',
			style: 'position:absolute;left:124px;top:135px;width:164px;height:19px;',
		},
	]
});