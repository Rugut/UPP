Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаЗапросаПерезаписиФайлов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:508px;height:95px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сохранение файла',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаДаДляВсех',
			text: 'Да для всех',
			style: 'position:absolute;left:108px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДа',
			text: 'Да',
			style: 'position:absolute;left:8px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНетДляВсех',
			text: 'Нет для всех',
			style: 'position:absolute;left:308px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНет',
			text: 'Нет',
			style: 'position:absolute;left:208px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:408px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждения',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:492px;height:56px;',
		},
	],
	dockedItems:
	[
	]
});