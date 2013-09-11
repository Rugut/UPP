Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаИзмененияВремениСобытия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:334px;height:188px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Изменение времени события',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Начало:',
			style: 'position:absolute;left:80px;top:36px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоСобытия',
			width: 122,
			height: 19,
			style: 'position:absolute;left:204px;top:36px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончание',
			text: 'Окончание:',
			style: 'position:absolute;left:80px;top:60px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОкончаниеСобытия',
			width: 122,
			height: 19,
			style: 'position:absolute;left:204px;top:60px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстПродолжительность',
			text: 'Продолжительность:',
			style: 'position:absolute;left:80px;top:84px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ТекстОтложитьНа',
			text: 'Отложить на:',
			style: 'position:absolute;left:8px;top:136px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Данные по событию',
			style: 'position:absolute;left:8px;top:8px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Действия',
			style: 'position:absolute;left:8px;top:112px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:80px;top:136px;width:246px;height:19px;',
			width: 246,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:204px;top:84px;width:122px;height:19px;',
			width: 122,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:334px;height:25px;',
			width: 334,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
	]
	});
});