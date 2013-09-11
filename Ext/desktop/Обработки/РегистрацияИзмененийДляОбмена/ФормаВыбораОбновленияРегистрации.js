Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбновленияРегистрации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:172px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация изменений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'ТекстВопроса',
			text: 'Текст вопроса',
			style: 'position:absolute;left:8px;top:8px;width:448px;height:70px;',
		},
		{
			xtype: 'label',
			text: 'Параметры обновления регистрации',
			style: 'position:absolute;left:8px;top:81px;width:448px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только для элементов, для которых включена авторегистрация изменений',
			style: 'position:absolute;left:8px;top:102px;width:448px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Для всех элементов',
			style: 'position:absolute;left:8px;top:123px;width:448px;height:16px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:147px;width:464px;height:25px;',
			width: 464,
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
					text:'Отмена',
					tooltip:'Отмена',
				},
			]
		},
	]
	});
});