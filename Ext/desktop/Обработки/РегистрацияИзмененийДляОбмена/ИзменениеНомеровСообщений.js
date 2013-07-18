Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ИзменениеНомеровСообщений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:278px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение номеров сообщений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомерОтправленного',
			text: 'Номер отправленного сообщения:',
			style: 'position:absolute;left:8px;top:10px;width:176px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерОтправленного',
			style: 'position:absolute;left:190px;top:10px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПринятого',
			text: 'Номер принятого сообщения:',
			style: 'position:absolute;left:8px;top:35px;width:176px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерПринятого',
			style: 'position:absolute;left:190px;top:35px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:278px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});