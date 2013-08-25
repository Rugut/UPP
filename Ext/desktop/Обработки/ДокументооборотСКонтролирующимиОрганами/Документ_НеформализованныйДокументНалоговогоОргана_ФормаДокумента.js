Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалоговогоОргана_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:438px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Неформализованный документ налогового органа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			width: 640,
			height: 25,
			items:
			[
				{
					text:'Найти в списке',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Показать цикл обмена, связанный с документом',
				},
					]
				},
				'-',
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:53px;width:123px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: 'НалоговыйОрган',
			style: 'position:absolute;left:134px;top:53px;width:498px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:116px;width:624px;height:289px;',
			height: 289,width: 624,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Содержание',
			style: 'position:absolute;left:0px;top:18px;width:624px;height:271px;',
		},
		{
			xtype: 'label',
			text: 'Содержание',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:88px;width:624px;height:22px;',
			height: 22,width: 624,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ВложенныйДокумент',
			text: 'Вложенные документы:',
			style: 'position:absolute;left:1px;top:6px;width:122px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеВложенныеДокументы',
			width: 390,
			height: 17,
			style: 'position:absolute;left:125px;top:5px;width:390px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:73px;width:123px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: 'Организация',
			style: 'position:absolute;left:134px;top:73px;width:498px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСоздан',
			text: 'НадписьСоздан',
			style: 'position:absolute;left:270px;top:33px;width:362px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:123px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Номер',
			text: 'Номер',
			style: 'position:absolute;left:134px;top:33px;width:132px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:413px;width:640px;height:25px;',
			width: 640,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});