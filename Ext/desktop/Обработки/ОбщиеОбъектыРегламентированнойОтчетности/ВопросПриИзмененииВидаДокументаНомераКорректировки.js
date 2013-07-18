Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ВопросПриИзмененииВидаДокументаНомераКорректировки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:415px;height:141px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменен вид документа и(или) номер корректировки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'КнопкаСоздатьНовый',
			text: 'Новый',
			style: 'position:absolute;left:19px;top:101px;width:96px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаписатьПоверхСтарого',
			text: 'Переписать',
			style: 'position:absolute;left:160px;top:101px;width:96px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтменить',
			text: 'Отмена',
			style: 'position:absolute;left:299px;top:101px;width:96px;height:22px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстСообщения',
			style: 'position:absolute;left:16px;top:18px;width:383px;height:77px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});