Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаПараметрыИнтеграцииСоСпринтером',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:598px;height:128px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры интеграции с ПК ""Спринтер"" компании ""Такском""',
	
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
			name: 'КодАбонента',
			width: 64,
			height: 19,
			style: 'position:absolute;left:189px;top:11px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Отправки данных отчетности:',
			style: 'position:absolute;left:20px;top:79px;width:166px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Программы электронной почты:',
			style: 'position:absolute;left:20px;top:57px;width:166px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Логин:',
			style: 'position:absolute;left:20px;top:13px;width:42px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогОтправкиДанныхОтчетности',
			width: 401,
			height: 19,
			style: 'position:absolute;left:189px;top:76px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогПрограммыЭлектроннойПочты',
			width: 401,
			height: 19,
			style: 'position:absolute;left:189px;top:53px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Каталоги',
			style: 'position:absolute;left:8px;top:35px;width:582px;height:15px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:103px;width:598px;height:25px;',
			width: 598,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Прочитать данные с настроечной дискеты',
					tooltip:'Прочитать данные с настроечной дискеты',
				},
				'-',
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});