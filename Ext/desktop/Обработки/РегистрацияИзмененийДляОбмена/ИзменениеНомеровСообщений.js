Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ИзменениеНомеровСообщений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:278px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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
			width: 80,
			height: 19,
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
			width: 80,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:278px;height:25px;',
			width: 278,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить',
					tooltip:'Изменить номера',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});