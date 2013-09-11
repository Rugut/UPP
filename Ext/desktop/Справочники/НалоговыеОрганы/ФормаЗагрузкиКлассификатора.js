Ext.require(['Данные.Справочники.НалоговыеОрганы'], function () 
{
	Ext.define('Справочники.НалоговыеОрганы.ФормаЗагрузкиКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Импорт классификатора СОУН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКаталог',
			text: 'Каталог:',
			style: 'position:absolute;left:8px;top:12px;width:56px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Каталог',
			width: 528,
			height: 19,
			style: 'position:absolute;left:66px;top:10px;width:528px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Настройки импорта',
			style: 'position:absolute;left:66px;top:87px;width:520px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'не обновлять комментарий',
			style: 'position:absolute;left:66px;top:111px;width:160px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер версии:',
			style: 'position:absolute;left:66px;top:38px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата версии:',
			style: 'position:absolute;left:66px;top:59px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВерсии',
			text: 'НадписьНомерВерсии',
			style: 'position:absolute;left:154px;top:38px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВерсии',
			text: 'НадписьДатаВерсии',
			style: 'position:absolute;left:154px;top:59px;width:83px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:585px;top:29px;width:2px;height:38px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:241px;top:45px;width:345px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:241px;top:66px;width:345px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:602px;height:25px;',
			width: 602,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Импортировать',
					tooltip:'Импортировать',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
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