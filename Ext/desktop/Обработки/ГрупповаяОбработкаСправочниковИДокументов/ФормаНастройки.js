Ext.require(['Данные.Обработки.ГрупповаяОбработкаСправочниковИДокументов'], function () 
{
	Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:316px;height:163px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			fieldLabel: 'Выполнять в транзакции',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:8px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Разрешить изменение реквизитов объектов',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:28px;width:263px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеНаСтрокиНеограниченнойДлины',
			text: 'Ограничение на строки неограниченной длины:',
			style: 'position:absolute;left:8px;top:111px;width:250px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОграничениеНаСтрокиНеограниченнойДлины',
			style: 'position:absolute;left:258px;top:111px;width:50px;height:19px;',
			width: 50,
			height: 19,
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Показывать все колонки',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:48px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Отбор по свойствам',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:68px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Отбор по категориям',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:88px;width:263px;height:20px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:138px;width:316px;height:25px;',
			width: 316,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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