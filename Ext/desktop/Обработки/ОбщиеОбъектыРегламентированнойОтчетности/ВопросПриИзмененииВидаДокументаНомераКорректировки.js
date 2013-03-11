Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ВопросПриИзмененииВидаДокументаНомераКорректировки',
	{
	extend: 'Ext.window.Window',
	height: 141,width: 415,
	iconCls: 'bogus',
	title: 'Изменен вид документа и(или) номер корректировки',
	
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстСообщения',
			style: 'position:absolute;left:16px;top:18px;width:383px;height:77px;',
		},
	]
});