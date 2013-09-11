Ext.require(['Данные.Документы.ЧекККМ'], function () 
{
	Ext.define('Документы.ЧекККМ.ФормаАвторизации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:468px;height:84px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Авторизация: Введите пароль или прочитайте регистрационную карту',
	
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
			name: 'Пользователь',
			width: 343,
			height: 19,
			style: 'position:absolute;left:117px;top:8px;width:343px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Пользователь:',
			style: 'position:absolute;left:8px;top:8px;width:104px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пароль',
			style: 'position:absolute;left:117px;top:32px;width:343px;height:19px;',
			width: 343,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Пароль:',
			style: 'position:absolute;left:8px;top:32px;width:104px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:59px;width:468px;height:25px;',
			width: 468,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить авторизацию',
					tooltip:'',
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