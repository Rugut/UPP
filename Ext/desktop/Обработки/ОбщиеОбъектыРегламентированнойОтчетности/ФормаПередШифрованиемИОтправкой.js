Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаПередШифрованиемИОтправкой',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:116px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Шифрование и отправка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:9px;width:362px;height:74px;',
			height: 74,width: 362,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Нажмите кнопку "Продолжить" для того, чтобы сохранить файлы \r\nна диске и передать управление программному комплексу \r\n"Спринтер" компании "Такском".',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:74px;text-align:center;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:378px;height:25px;',
			width: 378,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Продолжить',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'',
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